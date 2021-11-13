// 1- برنامه ای بنویسید که شعاع یک دایره را گرفته و محیط و مساحت آن را نشان دهد( ساده)
function circle(r){
    //check input
    if (typeof r!== 'number'|| r<=0) return console.log('please insert correct radius')

    console.log('Area of circle is=',Math.PI*(r**2))
    console.log('Circle environment is=',2*Math.PI*r)
}
// test
// circle(3)
// circle(-3)

// 2- برنامه ای بنویسید که اضلاع یک مثلت را به صورت متغیر گرفته و نوع مثلت ( متساوی الاضلاع، متساوی الساقین، مختلف الاضلاع) را چاپ کند.( متوسط)
function specifyTriangles(side1,side2, side3){
    //check inputs
    if (typeof side1!='number'||typeof side2!='number' ||typeof side3!='number'|| side1<=0|| side2<=0|| side3<=0)
        return console.log('please insert correct number')

    if(side1===side2 && side1===side3) return console.log('this is a Equilateral triangle')
    if(side1===side2 || side2===side3) return console.log('this is a Isosceles triangle')
    else return console.log('this is a Different side triangles')
}
//test
// specifyTriangles(3,3,3)
// specifyTriangles(2,3,3)
// specifyTriangles(2,4,3)
// specifyTriangles(-2,4,3)

// 3- برنامه ای بنویسید که یک کاراکتر به عنوان ورودی دریافت کرده و مشخص کند در کدام دسته از حروف بی صدا، حروف صدا دار، رقم ها و سایر کاراکترها قرار می گیرد.( متوسط)
function specifyChar(char){
    //check input
    if (typeof char !== 'string' || char.length===0|| char.length>1) return console.log('please insert a character as string')

    let ascii=char.charCodeAt(0)
    let vowels=[65,69,73,79,85,97,101,105,111,117]
    if (vowels.includes(ascii)) return console.log('this character is a vowel letter')
    if (65<=ascii && ascii<=90) return console.log('this character is a consonant letter')
    if (48<=ascii && ascii<=57) return  console.log('this character is a number')
    else return console.log('this character is not a number or letter')
}
//test
// specifyChar('a')
// specifyChar('B')
// specifyChar('!')
// specifyChar('1')
// specifyChar('')

// 4-برنامه ای بنویسید که یک رقم را به عنوان ورودی بگیرد و تعداد رقم های آن را مشخص کند. (ساده)
function setLength(num){
    //check input
    if(typeof num!=='number') return console.log('please enter a number')

    let numStr=Math.abs(num).toString()
    return console.log(numStr.length)
}
//test
// setLength(-12347)
// setLength(1342347)

// 5- برنامه ای بنویسید که دو عدد را به عنوان ورودی گرفته و مقسوم علیه های مشترک را به عنوان خروجی چاپ کند. ( متوسط)
function setDivisor(num1,num2){
//    check input
    if(typeof num1!=='number'|| typeof num2!== 'number'||num1<0|| num2<0) return console.log('please insert two  positive number')

    let result=[]
    let min=Math.min(num1,num2)
    let max=Math.max(num1,num2)
    for (let i=1;i<=(max/2);i++){
        if(max%i===0) result.push(i)
    }
    return (result.filter(item=>{
       return (min%item)===0
    }))
}

// console.log(setDivisor(12,6))
// console.log(setDivisor(20,25))


// 6- برنامه ای بنویسید که ب م م دو عدد را مشخص کند ( متوسط)
function BMM(num1,num2){
    if(typeof num1!=='number'|| typeof num2!== 'number'||num1<0|| num2<0) return console.log('please insert two  positive number')
    let divisors=setDivisor(num1,num2)
    let bmm=divisors.reduce((max,curVal)=>{
        if (curVal>max) max=curVal
        return max
    })
    return bmm
}
// console.log(BMM(32,8))

// 7-برنامه ای بنویسید که معدل دانش آموزهای مختلف را به عنوان ورودی بگیرد و میانگین معدل دانش آموزهایی که بالاتر از 15 می باشد را چاپ کند. ( متوسط)
function setAverge(arr){
    if (Object.prototype.toString.call(arr) != '[object Array]') return ('please insert an array')

    let result=arr.filter(item=>item>15)
    let sum=result.reduce((sum,curVal)=>{
         sum+=curVal
        return sum
    })
    return console.log(sum/result.length)
}
// setAverge([12,14,15,16,18,20,20])

// 8- برنامه ای بنویسید که آرایه ای از اعداد را گرفته و مشخص کند که چند تای آن ها از میانگین اعداد وارد شده کم تر می باشد.( متوسط)
function lessThanAverage(arr){
    if (Object.prototype.toString.call(arr) != '[object Array]') return ('please insert an array')
    let average=(arr.reduce((sum,curVal)=> {
            sum += curVal
            return sum
        }))/arr.length
    let result=arr.filter(item=>item<average)
    return [result,result.length]
}

// console.log(lessThanAverage([12,4,5,7,8,20,15,18,16]))
// console.log(lessThanAverage(1))

// 9- برنامه ای بنویسید که یک رشته و کاراکتر به عنوان ورودی دریافت کرده و نشان دهد که این کاراکتر چند بار در رشته تکرار شده است. ( متوسط)
function charCount(str,char){
    //check input
    if (typeof str!= 'string'|| typeof char!= 'string'|| str.length===0 || char.length===0) return ('please insert a string and character')
    let result=0
    let l=str.length
    for (let i=0;i<l;i++){
        if (str[i]===char) result++
    }
    return result
}

// console.log(charCount('saaalam','a'))

