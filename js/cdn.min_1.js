( () => {
    function c(e) {
        e.directive("intersect", (t, {value: i, expression: l, modifiers: n}, {evaluateLater: r, cleanup: o}) => {
            let s = r(l)
              , d = {
                rootMargin: p(n),
                threshold: f(n)
            }
              , u = new IntersectionObserver(h => {
                h.forEach(a => {
                    a.isIntersecting !== (i === "leave") && (s(),
                    n.includes("once") && u.disconnect())
                }
                )
            }
            ,d);
            u.observe(t),
            o( () => {
                u.disconnect()
            }
            )
        }
        )
    }
    
    function f(e) {
        if (e.includes("full"))
            return .99;
        if (e.includes("half"))
            return .5;
        if (!e.includes("threshold"))
            return 0;
        let t = e[e.indexOf("threshold") + 1];
        return t === "100" ? 1 : t === "0" ? 0 : Number(`.${t}`)
    }
    function x(e) {
        let t = e.match(/^(-?[0-9]+)(px|%)?$/);
        return t ? t[1] + (t[2] || "px") : void 0
    }
    function p(e) {
        let t = "margin"
          , i = "0px 0px 0px 0px"
          , l = e.indexOf(t);
        if (l === -1)
            return i;
        let n = [];
        for (let r = 1; r < 5; r++)
            n.push(x(e[l + r] || ""));
        return n = n.filter(r => r !== void 0),
        n.length ? n.join(" ").trim() : i
    }
    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(c)
    }
    );
}
)();
