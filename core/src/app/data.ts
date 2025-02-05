export interface urlItem {
    unique_code: string;
    link_name: string;
    url: string;
    clicks: number;
    url_output: string;
}
export interface url {
    data : urlItem
}

export interface urlData {

   data: urlItem[]
    
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

