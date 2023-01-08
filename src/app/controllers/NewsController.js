class NewsController
{
    ///[GET]/news
    index(req,res){
        res.render('news');
    }
    show(req,res){
        res.send('show');
    }
    submit(req,res){
        console.log(req.body)
        res.render('news');   
    }
}
module.exports=new NewsController;