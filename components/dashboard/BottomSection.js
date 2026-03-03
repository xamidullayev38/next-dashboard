import { Grid, Paper, Typography, Box, Stack, Avatar } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const notifications = [
  { name: "Ellie", text: "joined team developers", time: "04 April, 2021 | 04:00 PM" },
  { name: "Jenny", text: "joined team HR", time: "04 April, 2021 | 04:00 PM" },
  { name: "Adam", text: "got employee of the month", time: "03 April, 2021 | 02:00 PM" },
  { name: "Robert", text: "joined team design", time: "02 April, 2021 | 02:00 PM" },
  { name: "Jack", text: "joined team design", time: "01 April, 2021 | 03:00 PM" },
];

export default function BottomSection() {
  return (
    <Grid container spacing={3} mt={0}>
      {/* Big chart */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ width: "860px", p: 3, borderRadius: 2 }}>
          <Typography fontWeight={700} mb={2}>
            Project Deliveries
          </Typography>

          <LineChart
            xAxis={[
              {
                scaleType: "point",
                data: ["Oct 2021", "Nov 2021", "Dec 2021", "Jan 2022", "Feb 2022", "Mar 2022"],
              },
            ]}
            series={[
              { data: [6, 7, 6, 8, 6, 7], label: "Achieved" },
              { data: [4, 6, 5, 5, 6, 5], label: "Target" },
            ]}
            height={300}
          />
        </Paper>
      </Grid>

      {/* Notifications */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}
          >
            <Typography fontWeight={700}>Notifications</Typography>
            <Typography sx={{ color: "primary.main", fontWeight: 700, fontSize: 13 }}>
              View All
            </Typography>
          </Box>

          <Stack spacing={2}>
            {notifications.map((n, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: "background.default",
                }}
              >
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <Avatar sx={{ width: 34, height: 34 }}>{n.name[0]}</Avatar>
                  <Box>
                    <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                      {n.name} {n.text}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "text.secondary" }}>{n.time}</Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
