/**
 * Created by JeromeThinkPad on 2017/2/16.
 * @see momentjs文档：http://momentjs.cn/docs/
 */
document.write("<script language=javascript src='moment.min.js'></script>");


/**
 * 获取日期
 * 格式如：2017-02-16
 * @returns {*}
 */
function getDateYYYYMMDD(){
    return moment().format('YYYY-MM-DD');
}