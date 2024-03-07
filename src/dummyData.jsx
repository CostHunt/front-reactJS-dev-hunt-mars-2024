export const Users = [
    {
        id:1,
        profilePicture: "assets/pdp/bobo.jpg",
        username: "Bobo"
    },
    {
        id:2,
        profilePicture: "assets/pdp/marge.png",
        username: "Bao"
    }
]

export const Posts = [
    {
        id:1,
        desc:"Salama aby ity ndray ny EDT-tsika",
        photo:"assets/other/edt.jpg",
        date:"A l'instant",
        userId:1,
        like:32,
        comment:9
    },
    {
        id:1,
        desc:"Faly miarahaba antsika rehetra. Sambatra ireo zay manome noho ny mandray💗.BuyMeACoffee☕ ihany koa ny HIU izay hatao any Antananarivo ...",
        photo:"assets/other/c3lf.jpg",
        date:"Il y a 2min",
        userId:2,
        like:5,
        comment:1
    }
]

export const Comment=[
    {
        id:1,
        content:"Merci BOBO",
        idPost:1,
        idUser:2,
        date:"A l'instant",
        agreement:15
    },{
        id:1,
        content:"Voaray tompoko",
        idPost:1,
        idUser:2,
        date:"Il y a 2min",
        agreement:15
    },{
        id:1,
        content:"OK",
        idPost:1,
        idUser:2,
        date:"A l'instant",
        agreement:15
    },
]