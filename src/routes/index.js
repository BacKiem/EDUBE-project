const learningRoute=require("./learning")
const siteRoute=require("./site")
const coursesRoute=require("./courses")
const meRoute=require("./me")

function route(app){
    app.use('/me',meRoute)
    app.use('/learning',learningRoute)
    app.use('/courses',coursesRoute)
    app.use('/', siteRoute);
}

module.exports=route;