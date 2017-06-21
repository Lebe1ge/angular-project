interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: 'ROFQSFfTbl1O9qbNVUNWLdbNeEPTVdJs',
    domain: 'moupe.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
};
