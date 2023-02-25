use rocket::fs::relative;
use rocket::fs::FileServer;

#[macro_use]
extern crate rocket;

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", FileServer::from(relative!("static")))
}
