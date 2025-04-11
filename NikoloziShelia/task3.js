/**
 * პირობა იხილეთ HTML ფაილში
 */
const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
  ];

  let submitButton = document.getElementById("toggleButton");
  let userList = document.querySelector(".user-list");

  submitButton.addEventListener("click", (

    let userInfo = document.getElementById("user-info").value; 
    let userDetail = document.getElementById("user-details").value;
    let userInfo = document.getElementById("card-content").value;

        let newContainer = document.createElement("div");
        newContainer = `
        <div class="card">
          <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="https://fakeimg.pl/150x150" alt="John Doe" />
              </div>
              <div class="user-details">
                <h3>John Doe</h3>
                <p class="user-email">john@example.com</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="user-id">User ID: 1</p>
          </div>
        </div>
        `
      
  );
