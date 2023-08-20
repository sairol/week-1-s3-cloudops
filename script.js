const add = document.getElementById("plus");
        const counter = document.getElementById("counter");
        var count = 0;

        add.onclick = function() {
            count += 1;
            counter.innerHTML = `<h1>${count}</h1>`;
        };