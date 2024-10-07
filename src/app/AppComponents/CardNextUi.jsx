"use client";

import { useState } from "react";
import { Card, CardBody, Button, Spinner } from "@nextui-org/react";

export default function App({ listing, loading }) {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      ) : listing && listing.length > 0 ? (
        listing.map((item) => {
          const descriptionLength = item.description?.length || 0;

          return (
            <Card
              key={item._id}
              className="md:w-[30vw] my-3 w-[70vw] flex-wrap hover:bg-[#434252] text-white bg-[#282836] cursor-pointer"
            >
              <CardBody>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 ">
                      <div className="flex gap-2 items-center">
                        <img
                          src={
                            (item.gameId &&
                              item.gameId.imageUrls &&
                              item.gameId.imageUrls[0]) ||
                            "NI"
                          }
                          alt="NI"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                        <h3 className="text-xl ">
                          {item.title || "Default Title"}
                        </h3>
                      </div>
                      <p className="text-green-600 text-lg font-bold">
                        {item.price ? `$${item.price}` : "No price available"}
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <h6>Delivery Time</h6>
                      <p>{item.deliveryTime || "No delivery time available"}</p>
                    </div>
                  </div>
                  {item.description || "No description available"}
                  <div
                    className={`transition-all duration-500 ${
                      expandedCards[item._id]
                        ? "max-h-[none] overflow-auto"
                        : "max-h-[100px] overflow-hidden"
                    }`}
                    style={{
                      maxHeight: expandedCards[item._id] ? "300px" : "100px",
                      overflowY: expandedCards[item._id] ? "scroll" : "hidden",
                    }}
                  >
                    <p></p>
                  </div>

                  {descriptionLength > 50 && (
                    <Button
                      onClick={() => toggleExpanded(item._id)}
                      className="mt-2"
                    >
                      {expandedCards[item._id] ? "Read Less" : "Read More"}
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          );
        })
      ) : (
        <div className="text-center">
          <p className="text-white text-xl">No Data Available</p>
        </div>
      )}
    </>
  );
}
