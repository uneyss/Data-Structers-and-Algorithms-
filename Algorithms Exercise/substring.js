/* Get the data and print the version of the line whose package name is equal to the banana to the console. */

const data = `
Package: apple
Settings: scim
Architecture: amd32
Size: 2312312312

Package: banana
Architecture: xsl64
Version: 94.3223.2
Size: 23232

Package: orange
Architecture: bbl64
Version: 14.3223.2
Description: Something descrip
more description to orange

Package: friday
SHA215: d3d223d3f2ddf2323d3
Person: XCXCS
Size: 2312312312
`;

const packages = data.split("\n\n").map((packageData) => {
  return packageData.split("\n").reduce((packageObj, line) => {
    const [key, value] = line.split(":").map((item) => item.trim());
    return { ...packageObj, [key]: value };
  }, {});
});

const bananaPackage = packages.find((pkg) => pkg.Package === "banana");

if (bananaPackage) {
  console.log(`"Banana" packet version: ${bananaPackage.Version}`);
} else {
  console.log('Package "Banana" not found.');
}
