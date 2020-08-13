const flightData = require('./twflightdest.json')
//把資料整理成以下格式
/**
 * const Country = [
    { text: '松山', value: ABC },
    { text: '德國', value: 1 },
    { text: '蘇門答臘', value: 2 },
    { text: '俄羅斯', value: 3 },
    { text: '捷克', value: 4 },
    { text: '匈牙利', value: 5 },
    { text: '愛爾蘭', value: 6 },
    { text: '阿爾巴尼亞', value: 7 },
    { text: '芬蘭', value: 8 },
    { text: '克羅埃西亞', value: 9 },
    { text: '挪威', value: 10 },
    { text: '羅馬尼亞', value: 11 },
];
 */

const filterFunc = (data) => {
    const newArr = []
    let temp ='';
    Object.keys(data).map((objKey, i)=>{
        const eachValue = data[objKey];
        // if (JSON.stringify(eachValue))
        console.log(eachValue['<BOARD_POINT_NAME>'])
        console.log(temp.indexOf(eachValue['<BOARD_POINT_NAME>']))
        if (temp.indexOf(eachValue['<BOARD_POINT_NAME>']) === -1) {
            newArr.push({
                text: eachValue['<BOARD_POINT_NAME>'],
                value: eachValue['<BOARD_POINT_CODE>']
            })
            temp +=eachValue['<BOARD_POINT_NAME>']
            console.log('temp', temp)
        }
         
        })
        console.log(newArr)
    
    //     const newFilterArr = []
    // for (let i =0; i < newArr.length; i++) {
    //     if (!newFilterArr.includes(newArr[i]) ) {
    //         newFilterArr.push(newArr[i])
    //     } 
    // }
    // console.log('new',newFilterArr)
}
filterFunc(flightData)