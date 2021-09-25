
export function directionToJustification(direction): string {
    switch (direction) {
        case "left":
          return "flex-start";
        case "right":
          return "flex-end";
        default:
            return "center";
      }
}