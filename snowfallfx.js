function init (){
	var portrait = document.getElementById('winter-field');
	var context = portrait.getContext('2d');
	var w = portrait.width;
	var h = portrait.height;
	var background = new Image();
	background.src = "https://lh3.googleusercontent.com/p1Xu5jyj5l85jxAXPMm8v97uB7XWpQS1P-Xacg6DJz4QK3VLJ5rt-SGvclNIIylCcmTygvCLdmxcCWnnYhDo3kURDAXO5niJEQTKrcQswWUDSdYcKXYlPZjsVlaEWj-_6I5L3FmUQxKXacmYveS55p1ry-fuj9MBenPF2BRxgjXywZ-hi58y1YwlTdBcAKvu2CcO8CVYCKELN0CX9PTBXmWSkLfekF2SV0HlCQE-Hzwk1Bp7wF4TcgP_Fu2P-7XFTPmVNvF1dd40xI86jVP9i9Ft_GR-NVmGm-nnY_Kwsv3zpN7G3dmh82eisjEpSWafMKSEcXn_h0JaA8qqgofod0Gu9I3KzRX4Z2CKpt0wD4o-tAKSbiGoDZg0VHw1NqPfaAt4nF0gIHqFSoGj5eShqs98nfwNW0jQLUybTAShP9YVFJQoa3WrpXEMD7dT4DIbYMe2LOTDYiY_s9heVFaKOlG8tewDXSLjATNwhsMUqi8z2zk3M3Vqkr_LrgL83jjVfA8T7j-0AZp73eYprB21RemF8_pcIP2ouH54TqeKgH7U7W0mBpAuKhFvK92uiSfrtN7Cci6s2cvG22fP8dxTB272AP0z0W61tDZk5aYV5Q-4OqA47UZRa8EBXCe6zQK7HH-amiaoe-G6k2paUFWtjHPFm7Vx3cke6ni8Gnsyk_Ic5TjViiPGQ3hUJfAw62awNqWLntkzntAA3vYzp0tEvgGP=w450-h298-no";
	var snowflakes = [];

    function snowfall (){
        context.clearRect(0, 0, w, h);
        context.drawImage(background, 0, 0);
        addSnowFlake();
        snow();
    };

    function addSnowFlake (){
        var x = Math.ceil(Math.random() * w);
        var s = Math.ceil(Math.random() * 3);
        snowflakes.push({"x": x, "y": 0, "s": s});
    };

    function snow (){
        for (var i = 0; i < snowflakes.length; i++){
            var snowflake = snowflakes[i];
            context.beginPath();
            context.fillStyle = "rgba(255, 255, 255, 0.7)";
            context.arc(snowflake.x, snowflakes[i].y += snowflake.s/2, snowflake.s/2, 0, 2 * Math.PI);
            context.fill();
            if(snowflakes[i].y > h){
                snowflakes.splice(i, 1);
            }
        };
    };
    setInterval(snowfall, 20);
};
window.onload = init;