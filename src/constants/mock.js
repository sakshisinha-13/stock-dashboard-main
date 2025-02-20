export const mockSearchResults = {
  count: 4,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "AAPL.SW",
      symbol: "AAPL.SW",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.BE",
      symbol: "APC.BE",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.DE",
      symbol: "APC.DE",
      type: "Common Stock",
    },
  ],
};

export const mockCompanyDetails = {
  country: "US",
  currency: "USD",
  exchange: "NASDAQ/NMS (GLOBAL MARKET)",
  ipo: "1980-12-12",
  marketCapitalization: 1415993,
  name: "Apple Inc",
  phone: "14089961010",
  shareOutstanding: 4375.47998046875,
  ticker: "AAPL",
  weburl: "https://www.apple.com/",
  logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  finnhubIndustry: "Technology",
};

export const mockStockQuote = {
  c: 261.74,
  h: 263.31,
  l: 260.68,
  o: 261.07,
  pc: 259.45,
  t: 1582641000,
  d: -8.2,
  dp: 1.2,
};

export const mockHistoricalData = [{
  c: [217.68, 221.03, 219.89],
  h: [222.49, 221.5, 220.94],
  l: [217.19, 217.1402, 218.83],
  o: [221.03, 218.55, 220],
  s: "ok",
  t: [1569297600, 1569384000, 1569470400],
  v: [33463820, 24018876, 20730608],
},
{
  c: [150.75, 152.30, 151.45],
  h: [153.20, 152.80, 151.95],
  l: [148.90, 150.25, 150.60],
  o: [151.00, 151.90, 151.20],
  s: "ok",
  t: [1570142400, 1570228800, 1570315200],
  v: [8213745, 6938743, 7821749],
},{
  c: [425.60, 430.75, 429.40],
  h: [432.80, 431.50, 430.20],
  l: [422.10, 428.00, 426.80],
  o: [429.00, 430.50, 429.90],
  s: "ok",
  t: [1570737600, 1570824000, 1570910400],
  v: [5128492, 4930281, 5018492],
},
{
  c: [95.20, 97.30, 96.75],
  h: [98.50, 97.85, 96.90],
  l: [94.00, 96.00, 95.80],
  o: [96.25, 96.90, 96.10],
  s: "ok",
  t: [1571332800, 1571419200, 1571505600],
  v: [2923749, 3217483, 3037492],
},
{
  c: [780.40, 790.20, 785.75],
  h: [795.60, 792.50, 786.90],
  l: [775.10, 785.20, 783.00],
  o: [785.00, 789.40, 784.20],
  s: "ok",
  t: [1571928000, 1572014400, 1572100800],
  v: [4829472, 5038392, 4892038],
}]