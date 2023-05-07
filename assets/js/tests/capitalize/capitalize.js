function capitalize(str){
    const text = str.charAt(0).toUpperCase() + str.slice(1);
    return text;
};
module.exports = {capitalize};