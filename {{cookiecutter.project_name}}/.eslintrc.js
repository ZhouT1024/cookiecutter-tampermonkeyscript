module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    "globals": {
        GM_addElement, 
        GM_addStyle,
        GM_download,
        GM_getResourceText,
        GM_getResourceURL,
        GM_info,
        GM_log,
        GM_notification, 
        GM_openInTab,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand,
        GM_setClipboard,
        GM_getTab,
        GM_saveTab,
        GM_getTabs,
        GM_setValue,
        GM_getValue,
        GM_deleteValue,
        GM_listValues,
        GM_addValueChangeListener,
        GM_removeValueChangeListener,
        GM_xmlhttpRequest,
        GM_webRequest,
        GM_cookie,
    }
}
