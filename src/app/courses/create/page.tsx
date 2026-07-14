import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddcoursePage() {
  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add course</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex h-80 items-center justify-center rounded-lg border border-dashed">
            <p className="text-muted-foreground text-lg">
              course creation form will be here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
