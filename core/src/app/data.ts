export interface urlData {

    id: number;
    link_name: string;
    unique_code: string;
    url : string;
    clicks: string;
    url_output: string
    
}

export interface signUpData {
    message: string;
    username: string;
    token: string;
}

export interface loginData {
    message: string;
    token: string;
}