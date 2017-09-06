import ExternalSessionController from "../controller/external-session-controller";
import passport from "passport";

export default class ExternalSessionRoutes {
  static init(router) {
    // facebook auth router
    router.get("/auth/facebook", passport.authenticate('facebook', {
      authType: 'rerequest', scope: ['public_profile', 'email']
    }));
    router.get("/auth/facebook/callback", passport.authenticate('facebook', {
      failureRedirect: '/'
    }), function(req, res) {
      res.redirect('/');
    });

    // TODO: google
  }
}
