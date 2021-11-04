const testBooksBtn = document.querySelectorAll("button")[0];
const clearBooksBtn = document.querySelectorAll("button")[1];

testBooksBtn.addEventListener("click", () => {
  if (localStorage.library) {
    return;
  } else {
    addBookToLibrary(
      "A Portait of the Artist as a Young Man",
      "James Joyce",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Sons and Lovers",
      "D.H. Lawrence",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Lord Jim",
      "Joseph Conrad",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Way of All Flesh",
      "Samuel Butler",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Lord of the Flies",
      "William Golding",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A Passage to India",
      "E.M. Forster",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Sound and the Fury",
      "William Faulkner",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Rainbow",
      "D.H. Lawrence",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Ambassadors",
      "Henry James",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Women In Love",
      "D.H. Lawrence",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Finnegans Wake",
      "James Joyce",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "On the Road",
      "Jack Kerouac",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Ginger Man",
      "J.P. Donleavy",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Portnoy's Complaint",
      "Philip Roth",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Lolita",
      "Vladimir Nabokov",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Death of the Heart",
      "Elizabeth Bowen",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Sister Carrie",
      "Theodore Dreiser",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Moviegoer",
      "Walker Percy",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Tropic of Cancer",
      "Henry Miller",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Kim",
      "Rudyard Kipling",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "As I Lay Dying",
      "William Faulkner",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Ulysses",
      "James Joyce",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Tobacco Road",
      "Erskine Caldwell",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Good Soldier",
      "Ford Madox Ford",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Magnificent Ambersons",
      "Booth Tarkington",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Main Street",
      "Sinclair Lewis",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Under the Net",
      "Iris Murdoch",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "To the Lighthouse",
      "Virginia Woolf",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Prime of Miss Jean Brodie",
      "Muriel Spark",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Wapshot Chronicle",
      "John Cheever",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Catcher in the Rye",
      "J.D. Salinger",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A Farewell to Arms",
      "Ernest Hemingway",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A Bend in the River",
      "V.S. Naipaul",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Bridge of San Luis Rey",
      "Thornton Wilder",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A High Wind in Jamaica",
      "Richard Hughes",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Call of the Wild",
      "Jack London",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Golden Bowl",
      "Henry James",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Henderson the Rain King",
      "Saul Bellow",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Nostromo",
      "Joseph Conrad",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Old Wives' Tale",
      "Arnold Bennett",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Day of the Locust",
      "Nathanael West",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A House for Mr. Biswas",
      "V.S. Naipaul",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Under the Volcano",
      "Malcolm Lowry",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Studs Lonigan Trilogy (series)",
      "James T. Farrell",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Wings of the Dove",
      "Henry James",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Postman Always Rings Twice",
      "James M. Cain",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Animal Farm",
      "George Orwell",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Invisible Man",
      "Ralph Ellison",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Sun Also Rises",
      "Ernest Hemingway",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Tender is the Night",
      "F. Scott Fitzgerald",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Winesburg, Ohio",
      "Sherwood Anderson",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Point Counter Point",
      "Aldous Huxley",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Death Comes for the Archbishop",
      "Willa Cather",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Adventures of Augie March",
      "Saul Bellow",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Deliverance",
      "James Dickey",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Ironweed",
      "William Kennedy",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Ragtime",
      "E.L. Doctorow",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Scoop",
      "Evelyn Waugh",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Appointment in Samarra",
      "John O’Hara",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A Handful of Dust",
      "Evelyn Waugh",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A Room With a View",
      "E.M. Forster",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "An American Tragedy",
      "Theodore Dreiser",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Sheltering Sky",
      "Paul Bowles",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Light in August",
      "William Faulkner",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Native Son",
      "Richard Wright",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Naked and the Dead",
      "Norman Mailer",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Age of Innocence",
      "Edith Wharton",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The House of Mirth",
      "Edith Wharton",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Parade's End (series)",
      "Ford Madox Ford",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Maltese Falcon",
      "Dashiell Hammett",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Brave New World",
      "Aldous Huxley",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Howards End",
      "E.M. Forster",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Heart is a Lonely Hunter",
      "Carson McCullers",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A Clockwork Orange",
      "Anthony Burgess",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Go Tell It on the Mountain",
      "James Baldwin",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "A Dance to the Music of Time (series)",
      "Anthony Powell",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Catch-22",
      "Joseph Heller",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Heart of the Matter",
      "Graham Greene",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Brideshead Revisited",
      "Evelyn Waugh",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Midnight's Children",
      "Salman Rushdie",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Slaughterhouse-Five",
      "Kurt Vonnegut",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Darkness at Noon",
      "Arthur Koestler",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Magus",
      "John Fowles",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "All the King's Men",
      "Robert Penn Warren",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "From Here to Eternity",
      "James Jones",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Grapes of Wrath",
      "John Steinbeck",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "U.S.A. (trilogy)",
      "John Dos Passos",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Of Human Bondage",
      "W. Somerset Maugham",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "1984",
      "George Orwell",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "The Alexandria Quartet (series)",
      "Lawrence Durell",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Sophie's Choice",
      "William Styron",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Pale FIre",
      "Vladimir Nabokov",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "Angle of Repose",
      "Wallace Stegner",
      Math.floor(Math.random() * 1000),
      false
    );
    addBookToLibrary(
      "I, Claudius",
      "Robert Graves",
      Math.floor(Math.random() * 1000),
      false
    );
  }
});

clearBooksBtn.addEventListener("click", () => {
  localStorage.clear();
  document.location.reload();
});
