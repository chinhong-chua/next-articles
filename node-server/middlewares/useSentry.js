const Sentry = require("@sentry/node");

// const app = express();
const useSentry = () => {
  const init = (app) => {
    const sentryKey = process.env.SENTRY_KEY;
    const enabled = app.get("env") === "development";

    Sentry.init({
      dsn: sentryKey,
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Sentry.Integrations.Express({ app }),
        // Automatically instrument Node.js libraries and frameworks
        ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
      ],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
      //   enabled: _env !== "development",
      enabled,
    });

    // RequestHandler creates a separate execution context, so that all
    // transactions/spans/breadcrumbs are isolated across requests
    app.use(Sentry.Handlers.requestHandler());
    // TracingHandler creates a trace for every incoming request
    app.use(Sentry.Handlers.tracingHandler());

    // All controllers should live here
    app.get("/", function rootHandler(req, res) {
      res.end("Hello world!");
    });
    app.get("/debug", function mainHandler(req, res) {
      throw new Error("My adsadsds error!");
    });
  };

  const handleSentryError = (_app) => {
    _app.use(Sentry.Handlers.errorHandler());

    // Optional fallthrough error handler
    _app.use(function onError(err, req, res, next) {
      // The error id is attached to `res.sentry` to be returned
      // and optionally displayed to the user for support.
      console.log("sentry error hit");
      res.statusCode = 500;
      res.end(res.sentry + "\n");
    });
  };
  return { init, handleSentryError };
  // The error handler must be before any other error middleware and after all controllers
};

// For example, if you want to skip the server name and add just user, you would use requestHandler like this:

// app.use(
//   Sentry.Handlers.requestHandler({
//     serverName: false,
//     user: ["email"],
//   })
// );

// By default, errorHandler will capture only errors with a status code of 500 or higher. If you want to change it, provide it with the shouldHandleError callback, which accepts middleware errors as its argument and decides, whether an error should be sent or not, by returning an appropriate boolean value.
// app.use(
//   Sentry.Handlers.errorHandler({
//     shouldHandleError(error) {
//       // Capture all 404 and 500 errors
//       if (error.status === 404 || error.status === 500) {
//         return true;
//       }
//       return false;
//     },
//   })
// );

module.exports = useSentry;
