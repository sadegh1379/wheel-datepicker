import React, { useEffect, useRef, useState } from "react";
import { WheelPickerProps } from "../types";
import "./style.css";

const WheelPicker: React.FC<WheelPickerProps> = ({
  items,
  onChange,
  visibleCount = 3,
  value,
  className,
  containerClassName,
  itemClassName,
  indicatorClassName,
  itemHeight,
  indicatorBorderColor,
  indicatorBorderWith,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<any>(null);

  const ITEM_HEIGHT = itemHeight || 40;

  const totalPadding = Math.floor(visibleCount / 2);
  const paddedItems = [
    ...Array(totalPadding).fill(""),
    ...items,
    ...Array(totalPadding).fill(""),
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (value !== undefined) {
      const idx = items.indexOf(value);
      if (idx !== -1 && idx !== selectedIndex) {
        setSelectedIndex(idx);
        scrollToIndex(idx);
      }
    }
  }, [value, items]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: index * ITEM_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const scrollTop = scrollRef.current?.scrollTop || 0;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const realIndex = Math.min(items.length - 1, Math.max(0, index));
    if (realIndex !== selectedIndex) {
      setSelectedIndex(realIndex);
      onChange?.(items[realIndex]);
    }
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      scrollToIndex(realIndex);
    }, 150);
  };

  return (
    <div
      className={`wd-wheel-picker-container ${containerClassName || ""}`}
      style={{ height: visibleCount * ITEM_HEIGHT }}
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`wd-wheel-picker-scroll ${className || ""}`}
        style={{ height: "100%" }}
      >
        {paddedItems.map((item, idx) => {
          const center = selectedIndex + totalPadding;
          const distance = Math.abs(idx - center);
          const isSelected = distance === 0;
          const realIndex = idx - totalPadding;
          const isClickable = realIndex >= 0 && realIndex < items.length;

          return (
            <div
              key={idx}
              className={`wd-wheel-picker-item ${
                isSelected
                  ? "wd-wheel-picker-item-selected"
                  : "wd-wheel-picker-item-unselected"
              } ${isClickable ? "wd-wheel-picker-item-clickable" : ""} ${
                itemClassName || ""
              }`}
              style={{ height: ITEM_HEIGHT }}
              onClick={
                isClickable
                  ? () => {
                      setSelectedIndex(realIndex);
                      scrollToIndex(realIndex);
                      onChange?.(items[realIndex]);
                    }
                  : undefined
              }
            >
              {item}
            </div>
          );
        })}
      </div>

      <div
        className={`wd-wheel-picker-indicator ${indicatorClassName || ""}`}
        style={{
          top: `${ITEM_HEIGHT * totalPadding}px`,
          height: `${ITEM_HEIGHT}px`,
          borderColor: indicatorBorderColor,
          borderWidth: indicatorBorderWith,
        }}
      />
    </div>
  );
};

export default WheelPicker;
