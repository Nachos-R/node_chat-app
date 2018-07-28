export const deparam = (uri = window.location.search) => {
    let search = uri.substring(1);
    return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', 
        (key, value) => key===""?value:decodeURIComponent(value)
    );
}