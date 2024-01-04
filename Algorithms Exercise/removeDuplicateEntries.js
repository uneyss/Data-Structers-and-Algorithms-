// Delete matching ids from data

const data = [
    {
      "siteId": "9843598",
      "items": [
        {
          "catNum": 9418956196,
          "title": "This is item 1",
          "qty": 1
        }
      ]
    },
    {
      "siteId": "89419111",
      "items": [
        {
          "catNum": 1231654351,
          "title": "This is item 2",
          "qty": 1
        },
        {
          "catNum": 9418956196,
          "title": "This is item 1",
          "qty": 1
        }
      ]
    },
    {
      "siteId": "9843598",
      "items": [
        {
          "catNum": 9418956196,
          "title": "This is item 3",
          "qty": 1
        }
      ]
    },
  ];


const uniqueData = [];
const seenSiteIds = new Set(); // A set provides a collection where each element occurs only once.

data.forEach((entry) => {
  if (!seenSiteIds.has(entry.siteId)) {
    uniqueData.push(entry);
    seenSiteIds.add(entry.siteId);
  } else {
    console.log(`Duplicate entry found for siteId: ${entry.siteId}`);
  }
});

console.log("\nUnique Data =>\n", uniqueData);
console.log("\nSeen Site Ids =>\n", seenSiteIds);