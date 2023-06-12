// Nội dung

// IIFE trông như thế nào ?

// (function(message){
//     console.log('NOW NOW', message)
//  })('Chao ban!');

// Dùng dấu ; trươc IIFE

// let name = 'thay Nghia';

// (function(){

// })()
// IIFE là hàm "private"
// let i = 0;
// (function myFunc(){
//     i++
//     console.log(i)
//     if(i<10)

//     myFunc()
// })()


// Sử dụng IIFe khi nào


// Cách tạo ra 1 IIFE
// ;(function(){
//     let fullname = 'Nguyen Nghia'
//     console.log(fullname)
// }())

// hoac
// !function(){
//     let fullname = 'Nghia day'
//     console.log(fullname)
// }()
// // Ví dụ 
// const app = {
//     cars : [],
//     add(car){
//         this.cars.push(car)
//     },
//     edit(index, car){
//         this.cars[index] = car
//     },
//     delete(car){
//         this.cars.splice(index, 1)
//     }

// }

const appIIFE = (function(){
    //Private
    const cars = []
    return{
        
        add(car){
            this.cars.push(car)
        },
        edit(index, car){
            this.cars[index] = car
        },
        delete(index){
            this.cars.splice(index, 1)
        }
    

    }
})()


