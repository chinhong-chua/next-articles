/** @type {import('next').NextConfig} */

const nextConfig = {
  // Optional build-time configuration options
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
    widenClientFileUpload: true,
    transpileClientSDK: true,
    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",
    // Hides source maps from generated client bundles
    hideSourceMaps: true,
    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
    // See the sections below for information on the following options:
    //   'Configure Source Maps':
    //     - disableServerWebpackPlugin
    //     - disableClientWebpackPlugin
    //     - hideSourceMaps
    //     - widenClientFileUpload
    //   'Configure Legacy Browser Support':
    //     - transpileClientSDK
    //   'Configure Serverside Auto-instrumentation':
    //     - autoInstrumentServerFunctions
    //     - excludeServerRoutes
    //   'Configure Tunneling to avoid Ad-Blockers':
    //     - tunnelRoute
    // excludeServerRoutes: [
    //   "/some/excluded/route",
    //   "/excluded/route/with/[parameter]",
    //   /^\/route\/beginning\/with\/some\/prefix/,
    //   /\/routeContainingASpecificPathSegment\/?/,
    // ],

  },
};
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  org: "cruzor",
  project: "next-cruzblogz",

  silent: true, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
