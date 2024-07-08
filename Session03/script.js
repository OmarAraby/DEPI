const tracks = [
    {
        id: 1,
        name: "Keynote",
        speaker: "Dr. Jane Smith",
        time: "9:00 AM - 10:00 AM",
        room: "Main Hall",
    },
    {
        id: 2,
        name: "Web Development",
        speaker: "Alice Johnson",
        time: "11:00 AM - 12:00 PM",
        room: "Room A",
    },
    {
        id: 3,
        name: "Data Science",
        speaker: "Charlie Green",
        time: "11:00 AM - 12:00 PM",
        room: "Room B",
    },
    {
        id: 4,
        name: "Cloud Computing",
        speaker: "Eva Black",
        time: "11:00 AM - 12:00 PM",
        room: "Room C",
    },
];

let container = document.querySelector(".container");
for (let i = 0; i < tracks.length; i++) {
    let trackItem = document.createElement("div");
    trackItem.innerHTML = `
            <div class="card">
                <h2>${tracks[i]["name"]}</h2>
                <p><strong>Speaker:</strong> ${tracks[i].speaker}</p>
                <p><strong>Time:</strong> ${tracks[i].time}</p>
                <p><strong>Room:</strong> ${tracks[i].room}</p>
            </div>
            `;
    container.appendChild(trackItem);
}

//JQuery

// $(document).ready(function () {
//     tracks.forEach((track) => {
//         $(".container").append(
//             `<div class="card" id=${track.id}>
//       <h3>Track Name: ${track.name}</h3>
//       <p>Speaker: ${track.speaker}</p>
//       <p>Time: ${track.time}</p>
//       <p>Room: ${track.room}</p>
//       </div>`,
//         );
//     });
// });
