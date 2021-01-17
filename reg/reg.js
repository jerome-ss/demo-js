/**
 * 正则表达式 js
 *
 * @date 2017/1/18 10:59
 */

/**
 * 正则匹配器
 * @param value 校验的值
 * @param reg   正则表达式
 * @return      true/false
 */
function regMatch(value, reg) {

    if (value == null || reg == null) {
        console.warn('参数传入有误');
        return false;
    }

    var result = value.match(reg);
    if (result == null) {
        return false;
    } else {
        return true;
    }
}

/**
 * 校验密码强度
 * 密码的强度必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
 * @param value   密码
 * @return      true/false
 */
function checkPwd(value) {
    var reg = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$';
    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('密码的强度必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间');
        return false;
    }
}

/**
 * 检查中文
 * 字符串只能是中文
 * @param value 校验的值
 * @return      true/false
 */
function checkChinese(value) {
    var reg = '^[\\u4e00-\\u9fa5]{0,}$';
    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('字符串只能是中文');
        return false;
    }
}

/**
 * 校验E-Mail 地址
 * @param value 校验的值
 * @return      true/false
 */
function checkEMail(value) {
    var reg = "[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?";
    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('校验E-Mail 地址错误');
        return false;
    }
}

/**
 * 校验身份证号码（没有校验身份证匹配规则）
 * @param value 校验的值
 * @return      true/false
 */
function checkIDCard(value) {
    var reg = null;
    if (value.length == 15) {
        reg = "^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$";
    } else if (value.length == 18) {
        reg = "^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$";
    } else {
        console.warn('校验身份证号码长度有误');
        return false;
    }

    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('校验身份证号码有误');
        return false;
    }
}

/**
 * 校验IP-v4地址
 * @param value 校验的值
 * @return      true/false
 */
function checkIPV4(value) {
    var reg = "\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b";
    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('校验IP-v4地址错误');
        return false;
    }
}

/**
 * 校验IP-v6地址
 * @param value 校验的值
 * @return      true/false
 */
function checkIPV6(value) {
    var reg = "(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))";
    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('校验IP-v6地址错误');
        return false;
    }
}

/**
 * 校验手机号
 * 国内 13、15、18开头的手机号正则表达式
 * @param value 校验的值
 * @return      true/false
 */
function checkPhone(value) {
    var reg = '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$';
    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('校验手机号错误');
        return false;
    }
}

/**
 * 校验日期
 * “yyyy-mm-dd“ 格式的日期校验，已考虑平闰年
 * @param value 校验的值
 * @return      true/false
 */
function checkShortFormatDate(value) {
    var reg = '^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$';
    var result = regMatch(value, reg);
    if (result) {
        return true;
    } else {
        console.warn('校验日期错误');
        return false;
    }
}
