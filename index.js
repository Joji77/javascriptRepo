/* 1 

let userIsLoggedIn = true;
let videoIsCommentable = true;

const userCanComment = userIsLoggedIn && videoIsCommentable;
console.log(userCanComment);

*/

/* 2 

let userIsLoggedIn = true;
let userIsBlocked = false;

const userCanPost = userIsLoggedIn && !userIsBlocked;
console.log(userCanPost);

*/

/* 3 

let balance = 15;
let userCartTotal = 10;

const paymentComplete = balance >= userCartTotal;
console.log(paymentComplete);

*/

/* 4 

let userIsAdmin = false; 
let userIsModerator = false;
let userIsCommentarAuthor = true;

const userCanDelete = userIsAdmin || userIsCommentarAuthor || userIsModerator;

console.log(userCanDelete);

*/

/* 5 

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true;

const bombWillLaunch = presidentKey && primeMinisterKey && generalOfArmiesKey || masterKey;

console.log(bombWillLaunch);

*/

/* 6 

const userPincode = true;
const currentPinCode = true;
const newPinCode = false; 
const retypeNewPinCode = true;

const pinChangeComplete = userPincode && currentPinCode && newPinCode && retypeNewPinCode;

console.log(pinChangeComplete);

*/


/* 7 

let health = 0;
let lives = 0;

const gameOver = lives <= 0 && health <= 0 ;
console.log(gameOver);

*/

/* 8 

let capsuleCount = 1;
let userBalance = 5;
let credicCardStatus = ;

const paymentComplete = userBalance = 0;
*/




/* 9  
let availableRooms = 5;
let roomPrice = 20;
let userHasDiscount = roomPrice > 100;
const discount = userHasDiscount ? 20 : 0;
let userBalance = 500;
let userRoomCount = 1;

const paymentComplete = (availableRooms >= userRoomCount) && (userBalance >= roomPrice);

console.log(discount);
console.log(paymentComplete);

*/

/* 1 ახალი მესიჯი 


console.log("სალამი შემოგევლე");

let newMessages = 4;

if(newMessages > 0 ) {
    console.log("შენ გაქვს რამდენიმე წაუკითხავი მესიჯი");
}

*/

/* 2 ონლაინ მაღაზია 

let userBalance = 200;
let cartTotal = 280;

if(userBalance >= cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
} else {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
}
    
*/

/* სტუდენტი გამოცდაზე 

let testScore = 65;

if(testScore > 95) {
    console.log("გილოცავ შენი მომავალი საიმედო ხელშია");
} else if(testScore > 70) {
    console.log("კარგია, მაგრამ უკეთესიც შეიძლებოდა");
} else {
    console.log("Welcome to გეპეი! ავტუზოთ? :დ");
}

*/

/* ფასდაკლებების სისტემა 

let adminSale = 20;
let frequentClientSale = 15;
let studentSale = 10;
let userBalance = 100;
let cartTotal = 100;
let userIsAdmin = false;
let userIsStudent = true;


if(userBalance >= cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
    console.log(studentSale);
} else {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
}

*/

/* თბილისი ბათუმი 

let fuel = 25;

if(fuel >= 10) {
    console.log("ამ წვეთებით იგოეთამდე თუ მოახერხებ ჩაგორებას ძმაო");
} else if(fuel >= 20) {
    console.log("სავარაუდოდ გორამდე გაქაჩავ");
} else if(fuel >= 30) {
    console.log("ხაშურამდეც ჩახვალ ბიჯო :დ");
} else if(fuel >= 50) {
    console.log("ქუთეისამდე ჩახვალ სიმონ");
} else {
    console.log("ბათუმს ქათქათას");
}

*/

/* მისალმების ტექსტი 

let userFirstName = `ზუკა`;
let welcomeMessage = `სალამი ${userFirstName}`;

console.log(welcomeMessage);

*/

/* ონლაინ მაღაზია 

let userBalance = 50;
let cartTotal = 70;
let x = cartTotal - userBalance;

if(userBalance >= cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
} else {
    console.log(`თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ ჩარიცხოთ ${x} ლარი ოპერაციის დასასრულებლად.`);
}

*/

/* გამოცდის ქულა 

let y = 100;
let x = 50;
let z = 35; 

if(z > x/y) {
    console.log(`გილოცავთ თქვენ გადალახეთ ${x} ქულიანი ბარიერი ${z - x} ქულით`);
} else if(z < x/y) {
    console.log(`ვწუხვარ თქვენ ვერ გადალახეთ ${x} ქულიანი ბარიერი ${z} ქულით`);
}

*/

/* მიტანის სერვისი

let shoppingIsPossible = false;

if(shoppingIsPossible > 1) {
    console.log("თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არის");
} else {
    console.log("თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არ არის");
}

*/

/* პოლიტკორექტული მისალმება-დამშვიდობების მექანიზმი 

let userIsLoggedIn = true;
let userFirstName = `ზაზა`;
let userIsFemale = false; 

if(userIsLoggedIn) {
    console.log(`სალამი ${userIsFemale} ${userFirstName}`);
} else {
    console.log(`დროებით ${userIsFemale} ${userFirstName}`);
}

*/

/* 
   Array exercises
        6


let userQuestions = 28;

if(userQuestions > 25) {
    console.log('შემდეგი კითხვის დასმას შეძლებთ სამ საათში');
}

*/

/* ფიტნეს აპლიკაცია 

let userWeights = 57;
let goal = 50;
let x = userWeights - goal;

console.log(`შედეგის მიღწევამდე დაგრჩა ${x} კილო`);

*/

/* როგორ სწავლობს ჩემი ბიჭი? :დ 

let gigosTestResults = [2, 5, 12, 24];

if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] < 10) {
    console.log('რავიცი ნიჭიერია, მაგრამ ზარმაცი.');
} else if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] > 10) {
    console.log('კარგი შვილი გყავთ ქალბატონო ნუ ნერვიულობთ.');
} else {
    console.log('ოხ გიგო გიგოოო');
}

*/


/* ეროვნულები */

let gigosResults = [32, 35, 12, 72]
let barrier = 25;

if(gigosResults[0] < barrier) {
    console.log('სამწუხაროდ თქვენ ვერ ჩააბარეთ გამოცდა.');
} else if (gigosResults[1] < barrier) {
    console.log('სამწუხაროდ თქვენ ვერ ჩააბარეთ გამოცდა.');
} else if(gigosResults[2] < barrier) {
    console.log('სამწუხაროდ თქვენ ვერ ჩააბარეთ გამოცდა.');
} else if(gigosResults[3] < barrier) {
    console.log('სამწუხაროდ თქვენ ვერ ჩააბარეთ გამოცდა.');
}
