import react from "react";
import reactdom from "react-dom";
import { ChakraProvider, Heading, Text, Link } from "@chakra-ui/react";

const mapkit = window.mapkit;

function Map() {
  return <div id="map"></div>;
}

const tokenID =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZSNDg3NFE2SjUifQ.eyJpc3MiOiIyNVkyNEw1OThZIiwiaWF0IjoxNjI3ODUwMDA0LCJleHAiOjE2MzAzNTU4NDh9.fdoeHWEVFDYCylDw-AQ8TK-93kfCu4eCfqc691vohbU3eBq-EMn86dGXpMEWrzCUK6kHJdXiKgV5oKvXHj9iQA";
mapkit.init({
  authorizationCallback: function (done) {
    done(tokenID);
  },
});
var map = new mapkit.Map("map");
var center = new mapkit.Coordinate(33.769514, -84.413465);
var span = new mapkit.CoordinateSpan(0.2, 0.2);
var region = new mapkit.CoordinateRegion(center, span);
map.region = region;

reactdom.render(
  <ChakraProvider>
    <Map />
  </ChakraProvider>,
  document.getElementById("root")
);
