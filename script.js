// script.js

// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
  });
});

// 2. Form Validation for Upload Form
const uploadForm = document.querySelector('.upload-form');
uploadForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form inputs
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const description = document.getElementById('description').value.trim();
  const file = document.getElementById('file').files[0];

  // Validate inputs
  if (!title || !author || !description || !file) {
    alert('Please fill out all fields and upload a file.');
    return;
  }

  // Simulate successful upload
  alert('Research paper uploaded successfully!');
  uploadForm.reset(); // Clear the form
});

// 3. Dynamic Paper Loading (Simulate loading papers from a server)
const paperList = document.querySelector('.paper-list');

// Example data for papers
const papers = [
  {
    title: 'AI in Healthcare',
    author: 'John Doe',
    description: 'This paper explores the applications of AI in modern healthcare systems.',
    file: 'path/to/ai_healthcare.pdf',
    image: 'path/to/newspaper.gif',
  },
  {
    title: 'Renewable Energy Solutions',
    author: 'Jane Smith',
    description: 'A study on the latest advancements in renewable energy technologies.',
    file: 'path/to/renewable_energy.pdf',
    image: 'path/to/newspaper.gif',
  },
  {
    title: 'Climate Change and Agriculture',
    author: 'Alice Johnson',
    description: 'This paper examines the impact of climate change on global agriculture.',
    file: 'path/to/climate_agriculture.pdf',
    image: 'path/to/newspaper.gif',
  },
];

// Function to create a paper card
function createPaperCard(paper) {
  const paperCard = document.createElement('div');
  paperCard.classList.add('paper-card');

  paperCard.innerHTML = `
    <div class="animated-paper">
      <img src="${paper.image}" alt="Newspaper Animation">
    </div>
    <h3>Title: ${paper.title}</h3>
    <p>Author: ${paper.author}</p>
    <p>Description: ${paper.description}</p>
    <a href="${paper.file}" download>Download Paper</a>
  `;

  return paperCard;
}

// Load papers dynamically
papers.forEach(paper => {
  const paperCard = createPaperCard(paper);
  paperList.appendChild(paperCard);
});

// 4. Comment Submission
const commentForm = document.querySelector('.add-comment');
const commentsSection = document.querySelector('.comments');

commentForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const commentInput = this.querySelector('textarea');
  const commentText = commentInput.value.trim();

  if (!commentText) {
    alert('Please write a comment before submitting.');
    return;
  }

  // Create a new comment element
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `<p><strong>User123:</strong> ${commentText}</p>`;

  // Add the new comment to the comments section
  commentsSection.insertBefore(newComment, commentForm);

  // Clear the comment input
  commentInput.value = '';
});