const ItemType = {
    EX: 0
}

var getTypePrice = function (type) {
    switch (type) {
        case 0:
            return 10
            break
    }
}

var Item = (type) => {
    return {
        type: type,
        price: getTypePrice
    }
}

export {
    ItemType,
    getTypePrice,
    Item
}

export default Item