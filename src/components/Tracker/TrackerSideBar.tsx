import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { TRACKER_STATUSES } from "./constants/trackerStatuses";
import { AnimeStatusValue } from "./types/Tracker";

type TrackerSideBarProps = {
  selectedStatus: 'all' | AnimeStatusValue;
  onSelect: (status: 'all' | AnimeStatusValue) => void;
}

export default function TrackerSideBar({selectedStatus, onSelect}: TrackerSideBarProps) {
  return (
    <Box> {/*Вынести в отдельный компонент TrackerSideBar */}
      <nav>
        <List>
          <ListItem>
            <ListItemButton 
              selected={selectedStatus === 'all'}
              onClick={() => onSelect('all')}
            >
              Все
            </ListItemButton>
          </ListItem>
          {TRACKER_STATUSES.map((status) => (
            <ListItem key={status.value}>
              <ListItemButton
                selected={selectedStatus === status.value}
                onClick={() => onSelect(status.value)}
              >
                {status.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}