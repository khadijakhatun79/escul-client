import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManagecoursesPage() {
  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Manage courses</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex h-96 items-center justify-center rounded-lg border border-dashed">
            <p className="text-muted-foreground text-lg">
              course management table will be here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
