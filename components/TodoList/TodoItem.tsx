import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

TodoItem.propTypes = {
  
};

function TodoItem() {
  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Avatar with text and icon
      </Typography>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
        />
      </ListItem>
    </Grid>
  );
}

export default TodoItem;