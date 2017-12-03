Ext.define("TicketState", {
    extend: "Ext.data.Model",
    fields: [
      {
        name: "oldStatus",
        type: "string"
      },
      {
        name: "newStatus",
        type: "string"
      },
      {
        name: "role",
        type: "string"
      },
      {
        name: "assigneeRole",
        type: "string"
      },
      {
        name: "ticketType",
        type: "string"
      }
    ]
  });