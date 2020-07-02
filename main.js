let documentBody = document.querySelector("body")
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
            return "tail"
        }
        else {
            return "head"
        }

    },
    toHTML: function () {
        let image = document.createElement('img');

        image.setAttribute("width", 150)
        image.setAttribute("height", 100)
        if (this.state === 0) {

            image.setAttribute("src", "images.jpg/tailimage.png")
            return image;
        }
        else {
            image.setAttribute("src", "images.jpg/headimage.png")
            return image;
        }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/


    }
};
//coin.flip();
//coin.toString()
//coin.toHTML()

function display20String() {
    let i = 0
    let num = 20
    while (i < num) {
        coin.flip()
        // coin.toString()
        documentBody.append(coin.toString())

        i++
    }

}
display20String()

function display20images() {
    let i = 0;
    let no = 20
    while (i < no) {
        coin.flip()
        coin.toHTML()
        documentBody.append(coin.toHTML())
        // documentBody.append(coin.toString())
        i++
    }

}
display20images()
