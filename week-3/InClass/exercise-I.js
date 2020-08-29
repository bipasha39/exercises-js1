const zigzag = [100,"iSMael",55,45,"sANyiA", 66,"JaMEs","eLAmIn",23,"IsMael",67,19,"ElaMIN",
];

function makeUp(arr) {
  return arr.filter((element) => { return typeof element === 'string' }).map((element) => { element = element.toUpperCase(); return element = element + '!'; });
}

console.log(makeUp(zigzag));