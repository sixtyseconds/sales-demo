# Currency-Specific Routes

This application now supports dedicated currency-specific routes that allow you to share direct links to prospects in their preferred currency and spelling format.

## Available Routes

### Main Pages
- **`/UK`** - UK version with GBP currency and British spelling
- **`/US`** - US version with USD currency and American spelling  
- **`/EU`** - EU version with EUR currency and British spelling

### Pricing Pages
- **`/UK/pricing`** - UK pricing page with GBP prices and British spelling
- **`/US/pricing`** - US pricing page with USD prices and American spelling
- **`/EU/pricing`** - EU pricing page with EUR prices and British spelling

### Solution Pages
- **`/UK/solutions/:challengeId`** - UK solution pages with British spelling
- **`/US/solutions/:challengeId`** - US solution pages with American spelling
- **`/EU/solutions/:challengeId`** - EU solution pages with British spelling

## Features

### Automatic Spelling Conversion
- **UK/EU routes**: Use British spelling (personalisation, optimisation, etc.)
- **US routes**: Use American spelling (personalization, optimization, etc.)

### Currency Display
- **UK routes**: Prices in GBP (£)
- **US routes**: Prices in USD ($)
- **EU routes**: Prices in EUR (€)

### Visual Indicators
- Each currency-specific page shows a small flag indicator in the header
- Currency selector automatically navigates to the appropriate route

### Navigation Persistence
- All internal navigation maintains the currency context
- Switching currencies updates the URL to the appropriate route
- Back button navigation respects currency-specific paths

## Usage Examples

```
# Share UK pricing page with British prospects
https://yoursite.com/UK/pricing

# Share US pricing page with American prospects  
https://yoursite.com/US/pricing

# Share EU pricing page with European prospects
https://yoursite.com/EU/pricing

# Share specific solution pages by region
https://yoursite.com/UK/solutions/outreach
https://yoursite.com/US/solutions/landing
https://yoursite.com/EU/solutions/content
```

## Implementation Notes

- Routes automatically set the appropriate currency and spelling
- Currency selector updates the URL when changed
- All navigation maintains currency context
- Fallback to default routes if currency-specific route not found
- SEO-friendly URLs for different markets 