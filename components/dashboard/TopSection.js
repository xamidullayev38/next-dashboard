import { Grid, Paper, Typography, Box, Stack, Avatar } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

export default function TopSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const cardSx = {
    p: 3,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "none",
    bgcolor: "background.paper",
    minHeight: "100%",
  };

  const statCardSx = {
    p: 2.5,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "none",
    width: "100%",
    textAlign: "center",
  };

  // pastel backgroundlar (dark mode’da ham ko‘rinadi)
  const statBg = {
    peach: alpha("#F4B56A", isDark ? 0.18 : 0.28),
    lavender: alpha("#6C63FF", isDark ? 0.18 : 0.14),
    sky: alpha("#45D6E5", isDark ? 0.16 : 0.18),
  };

  return (
    <Grid container spacing={3} mb={3}>
      {/* Teams Strength */}
      <Grid item xs={12} md={4}>
        <Paper sx={cardSx}>
          <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 2, color: "text.primary" }}>
            Teams Strength
          </Typography>

          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <BarChart
              xAxis={[{ scaleType: "band", data: ["a", "b", "c", "d"] }]}
              series={[{ data: [1, 5, 3, 10], color: "#F4B56A" }]}
              height={190}
            />
          </Box>

          <Stack direction="row" spacing={2} mt={2} flexWrap="wrap" useFlexGap>
            {[
              { t: "Marketing", c: "#F4B56A" },
              { t: "HR", c: "#FF7A59" },
              { t: "Developers", c: "#45D6E5" },
              { t: "Design", c: "#6C63FF" },
            ].map((x) => (
              <Stack key={x.t} direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 22,
                    height: 22,
                    borderRadius: 1,
                    bgcolor: x.c,
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  {x.t[0]}
                </Box>
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>{x.t}</Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Grid>

      {/* Employees */}
      <Grid item xs={12} md={4}>
        <Paper sx={cardSx}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 16, color: "text.primary" }}>
              Employees
            </Typography>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>Aug 25 - Sept 25</Typography>
          </Box>

          <Box sx={{ width: "100%", position: "relative", display: "grid", placeItems: "center" }}>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 78, color: "#F4B56A" },
                    {
                      id: 1,
                      value: 22,
                      color: alpha(theme.palette.text.primary, isDark ? 0.1 : 0.08),
                    },
                  ],
                  innerRadius: 78,
                  outerRadius: 90,
                  startAngle: -90,
                  endAngle: 270,
                  paddingAngle: 0,
                  cornerRadius: 18,
                },
                {
                  data: [
                    { id: 0, value: 55, color: "#FF7A59" },
                    {
                      id: 1,
                      value: 45,
                      color: alpha(theme.palette.text.primary, isDark ? 0.1 : 0.08),
                    },
                  ],
                  innerRadius: 62,
                  outerRadius: 74,
                  startAngle: -90,
                  endAngle: 270,
                  paddingAngle: 0,
                  cornerRadius: 18,
                },
                {
                  data: [
                    { id: 0, value: 18, color: "#6C63FF" },
                    {
                      id: 1,
                      value: 82,
                      color: alpha(theme.palette.text.primary, isDark ? 0.1 : 0.08),
                    },
                  ],
                  innerRadius: 46,
                  outerRadius: 58,
                  startAngle: -90,
                  endAngle: 270,
                  paddingAngle: 0,
                  cornerRadius: 18,
                },
              ]}
              height={220}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              slotProps={{ legend: { hidden: true } }}
            />

            <Box
              sx={{
                position: "absolute",
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor: alpha("#F4B56A", isDark ? 0.35 : 0.35),
                display: "grid",
                placeItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  bgcolor: "background.paper",
                  color: "text.primary",
                  fontWeight: 800,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                A
              </Avatar>
            </Box>
          </Box>

          <Stack spacing={1.2} mt={1}>
            {[
              { label: "Inactive", val: "254", dot: "#6C63FF" },
              { label: "Active", val: "3000", dot: "#FF7A59" },
              { label: "Total", val: "3254", dot: "#F4B56A" },
            ].map((it) => (
              <Box key={it.label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: it.dot }} />
                <Typography sx={{ fontSize: 13, color: "text.secondary", flex: 1 }}>
                  {it.label}
                </Typography>
                <Typography sx={{ fontWeight: 800, fontSize: 14, color: "text.primary" }}>
                  {it.val}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Grid>

      {/* Right stat cards */}
      <Grid item xs={12} md={4} sx={{ minWidth: 300 }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Paper sx={{ ...statCardSx, bgcolor: statBg.peach }}>
            <Typography sx={{ fontWeight: 800, fontSize: 18, color: "text.primary" }}>
              Top 10
            </Typography>
            <Typography sx={{ fontSize: 13, mt: 0.5, color: "text.primary" }}>
              Position In Dribbble
            </Typography>
            <Typography sx={{ fontSize: 12, mt: 0.5, color: "text.secondary" }}>
              20% increase from last week
            </Typography>
          </Paper>

          <Paper sx={{ ...statCardSx, bgcolor: statBg.lavender }}>
            <Typography sx={{ fontWeight: 900, fontSize: 20, color: "text.primary" }}>
              26
            </Typography>
            <Typography sx={{ fontSize: 13, mt: 0.5, color: "text.primary" }}>
              New Employees Onboarded
            </Typography>
            <Typography sx={{ fontSize: 12, mt: 0.5, color: "text.secondary" }}>
              15% increase from last month
            </Typography>
          </Paper>

          <Paper sx={{ ...statCardSx, bgcolor: statBg.sky }}>
            <Typography sx={{ fontWeight: 900, fontSize: 20, color: "text.primary" }}>
              500
            </Typography>
            <Typography sx={{ fontSize: 13, mt: 0.5, color: "text.primary" }}>
              New Clients Approached
            </Typography>
            <Typography sx={{ fontSize: 12, mt: 0.5, color: "text.secondary" }}>
              5% increase from last week
            </Typography>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
}
