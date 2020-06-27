let documentBody = document.querySelector("body")
//let coinfacebutton = document.createElement("button")
//coinfacebutton.append("Coin")
//documentBody.append(coinfacebutton)

//coinfacebutton.addEventListener("click", function () {
//  coin.flip()
//let flipVal = this.state
//console.log(flipVal)


let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        // return Math.floor((Math.random() * this.state) + 1);

        this.state = Math.round(Math.random())
        console.log(this.state)

    },

    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            console.log("tail")
        }
        else {
            console.log("head")
        }

    },
    toHTML: function () {
        let para = document.createElement('para');
        let image = document.createElement('img');
        let text = document.createElement('text');
        // let coinSide = ""
        image.setAttribute("width", 150)
        image.setAttribute("height", 100)
        if (this.state === 0) {

            image.setAttribute("src", "images.jpg/tailimage.png")
            text.innerHTML = "tail"
        }
        else {
            image.setAttribute("src", "images.jpg/headimage.png")
            text.innerHTML = "head"
        }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        para.append(image)
        para.append(text)

        documentBody.append(para)
        //return image;
    }
};
//coin.flip();
//coin.toString()
//coin.toHTML()

function display20String(func) {
    let i = 0
    let num = 20
    while (i < num) {
        coin.flip()
        coin.toString()
        document.write()
        i++
    }
}
display20String()

function display20images(f) {
    let i = 0;
    let no = 20
    while (i < no) {
        coin.flip()
        coin.toHTML()
        i++
    }
}

display20images()