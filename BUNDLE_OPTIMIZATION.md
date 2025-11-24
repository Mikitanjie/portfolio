# Bundle Optimization Notes

## Potentially Unused Dependencies

The following packages appear to be unused in the codebase. Consider removing them to reduce bundle size:

1. **@emotion/react** & **@emotion/styled** - Not found in codebase
2. **@mui/material** & **@mui/icons-material** - Not found in codebase
3. **express** - Not needed (Next.js has built-in server)
4. **next-i18next** - Not found in codebase (i18n not implemented)
5. **nodemailer** - Not used (using Resend API instead)
6. **react-material-ui-carousel** - Not found in codebase
7. **react-responsive-carousel** - Not found in codebase
8. **react-slick** & **slick-carousel** - Not found in codebase

## To Analyze Bundle Size

1. Install bundle analyzer:
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

2. Update `next.config.js`:
   ```javascript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   });

   module.exports = withBundleAnalyzer(nextConfig);
   ```

3. Run analysis:
   ```bash
   ANALYZE=true npm run build
   ```

## Recommendations

- Remove unused dependencies to reduce bundle size
- Use dynamic imports for heavy components (already implemented)
- Consider code splitting for large components
- Monitor bundle size with each deployment

