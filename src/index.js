import app from './app';
import './database';

//app.listen(3000);
app.set('port', process.env.PORT || 3000); 

app.listen(app.get('port'))

console.log("👋👋👋 Server listen on port", app.get('port'))