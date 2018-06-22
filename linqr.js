javascript: (function() {
    function callback() {
        (function($) {
            varjQuery = $;
            function callback() {
                var b = document.getElementsByTagName('body')[0] || document.documentElement;
                var q = document.createElement('div');
                q.setAttribute('id', 'linqrm');
                q.setAttribute('class', 'modal');
                q.style.position = 'fixed';
                q.style.zIndex = 999999;
                q.style.left = 0;
                q.style.top = 0;
                q.style.overflow = 'visible';
                q.style.backgroundColor = 'rgba(0,0,0)';
                q.style.backgroundColor = 'rgba(0,0,0,0.4)';
                var m = document.createElement('div');
                m.setAttribute('id', 'linqrc');
                m.setAttribute('class', 'modal-content');
                m.style.backgroundColor = '#fefefe';
                m.style.padding = '8px';
                m.style.textAlign = 'center';
                m.style.border = '1px solid #888';
                var x = document.createElement('span');
                x.innerHTML = '&times;';
                x.setAttribute('class', 'close');
                x.style.color = '#aaa';
                x.style.border = '1px';
                x.style.margin = '0px 0px 4px 4px';
                x.style.float = 'right';
                x.onclick = function(event){q.style.display='none';};
                m.appendChild(x);
                q.appendChild(m);
                var qrcode = new QRCode(m, {width: 300, height: 300});
                qrcode.makeCode(decodeURIComponent(location.href));
                b.appendChild(q);
            }
            var s = document.createElement('script');
            s.src = 'https://cdn.rawgit.com/alpers/site/master/assets/res/qrcode.js';
            if (s.addEventListener) {s.addEventListener('load', callback, false)}
            else if(s.readyState) {s.onreadystatechange = callback}
            document.body.appendChild(s);
        })(jQuery.noConflict(true))
    }
    var s = document.createElement('script');
    s.src = 'https://cdn.rawgit.com/alpers/site/master/assets/res/jquery.min.js';
    if (s.addEventListener) { s.addEventListener('load', callback, false) }
    else if(s.readyState) { s.onreadystatechange = callback }
    document.body.appendChild(s);
})()