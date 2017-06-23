import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService implements CanActivate {

    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.clientID,
        domain: AUTH_CONFIG.domain,
        responseType: 'token id_token',
        audience: `https://${AUTH_CONFIG.domain}/userinfo`,
        redirectUri: AUTH_CONFIG.callbackURL,
        scope: 'openid profile'
    });

    userProfile: any;

    constructor(public router: Router) {}

    /**
     * Restriction sur les pages en fonction si l'utilisateur est connecté ou non
     */
    canActivate() {
      if (this.isAuthenticated()) {
        return true;
      } else {
        this.auth0.authorize();  // redirect to login page
        return false;
      }
    }

    public login(): void {
        this.auth0.authorize();
    }

    /**
     * Gère l'authentification
     */
    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/home']);
            } else if (err) {
                this.router.navigate(['/home']);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    /**
     * Récupère le profil de l'utilisateur
     * @param cb 
     */
    public getProfile(cb): void {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }

        const self = this;
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    }

    /**
     * Setter session
     * @param authResult 
     */
    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    /**
     * Déconnection de l'utilisateur
     */
    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    /**
     * Savoir si l'utilisateur est connecté ou non
     */
    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}
