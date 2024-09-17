import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const posts = [
  {
    title: "Understanding Microservices Architecture",
    date: "October 5, 2023",
    excerpt: "An overview of microservices and their benefits...",
    link: "/blog/microservices-architecture",
  },
  // Add more posts
];

const Blog: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      <List>
        {posts.map((post, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={post.title}
              secondary={`${post.date} — ${post.excerpt}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Blog;
