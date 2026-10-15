"""Writes spec.json (to the current directory) for compose.py.

Some entries are not used on the page; their output is not committed.
"""
import json
# label-and-value text nodes: blur from the value column to the node's end (Figma px, 1x)
def ui(dx, dy):   # User information block; dx, dy shift of the block in this frame
    rows = [(394,408,502,170),(394,508,502,170),(394,553,502,170),(394,598,502,170),(422,733,474,150),(422,846,335,150)]
    return [[x+dx+o, y+dy-5, w-o, 31] for x,y,w,o in rows]
def pp(dx, dy):   # Principal partner block; dx, dy as for ui
    rows = [408,462,620,673,726,835]
    return [[1017+dx+180, y+dy-5, 346, 31] for y in rows]
# the ID in "Changed by: …" in the applications table, one box per row y
changed = lambda ys, x=880: [[x+90, y-4, 118, 29] for y in ys]
header = [[1560, 12, 320, 33]]   # the signed-in user's ID and name in the header
spec = {
 "partner-details":   {"src":"p-details.png","y0":0,"blur":header},
 "partner-users":     {"src":"p-users.png","y0":200,"blur":header},
 "partner-business-areas":{"src":"p-business-areas.png","y0":0,"blur":header},
 "partner-contact-book":{"src":"p-contact-book.png","y0":640,"blur":header},
 "partner-clients":   {"src":"p-clients.png","y0":200,"blur":header},
 "partner-app-settings":{"src":"p-app-settings.png","y0":200,"blur":header},
 "partner-bia-add":   {"src":"p-bia-add.png","y0":200,"modal":"auto","blur":header+[[495,1203+48*k,128,29] for k in range(5)]},
 "partner-structure": {"src":"p-structure.png","y0":200,"blur":header+[[728,1152+48*k,98,29] for k in range(6)]},
 "user-new":          {"src":"u-new.png","y0":0,"blur":pp(0,-20)},
 "user-new-vcd":      {"src":"u-new-vcd.png","y0":0,"overlay":[["m-vcd.png",310,280]],"blur_after":[[1228,393,130,32],[818,459,122,32]],"blur":ui(-7,0)+pp(-7,0)},
 "user-new-partner":  {"src":"u-new-partner.png","y0":0,"overlay":[["m-partner.png",420,311]],"blur_after":[[1185,425,105,32]],"blur":ui(-7,0)+pp(-7,0)},
 "user-new-saved":    {"src":"u-new-snackbar.png","y0":0,"overlay":[["m-snackbar.png",1543,64]],"blur":ui(-7,0)+pp(-7,0)},
 "user-applications": {"src":"u-applications.png","y0":300,"blur":ui(0,0)+pp(0,0)+changed([1212,1273,1329,1390,1451])},
 "user-copy-partner": {"src":"u-copy-select.png","y0":100,"modal":"auto","blur":ui(0,1)+pp(0,1)+changed([1202,1263,1319,1380,1441])},
 "user-copy-apps":    {"src":"u-copy-next.png","y0":100,"modal":"auto","blur":ui(0,1)+pp(0,1)+changed([1202,1263,1319,1380,1441]),"blur_modal":[[785+90,y-4,118,29] for y in (384,446,632)]+[[833+90,y-4,118,29] for y in (508,570)]},
 "user-copy-result":  {"src":"u-copy-result.png","y0":100,"modal":"auto","blur":ui(0,1)+pp(0,1)+changed([1202,1263,1319,1380,1441])},
 "user-services":     {"src":"u-services.png","y0":150,"blur":ui(0,-20)+pp(0,-20)},
 "user-service-add":  {"src":"u-service-add.png","y0":150,"modal":"auto","blur":ui(0,-20)+pp(0,-20),"blur_modal":[[920,464,124,29]]},
 "user-partners":     {"src":"u-partners.png","y0":289,"blur":ui(-7,0)+pp(-7,0)},
 "user-search":       {"src":"u-search.png","y0":0,"blur":[[x-6,y-4,w+12,29] for y in range(506,843,48) for x,w in ((483,101),(787,88),(1101,63),(1411,45))]},
 "user-search-advanced":{"src":"u-search-advanced.png","y0":345,"blur":[[x-6,y-4,w+12,29] for y in range(977,1314,48) for x,w in ((477,101),(781,88),(1095,63),(1405,45))]},
 "unit-search":       {"src":"n-search.png","y0":0},
 "unit-search-advanced":{"src":"n-search-advanced.png","y0":0},
 "unit-details":      {"src":"n-address.png","y0":0,"blur":[[525,535,330,31]]},
 "unit-business-areas":{"src":"n-ba-base.png","y0":0,"blur":[[525,535,330,31]],"scrim":["#141414",0.4],"overlay":[["n-ba-modal.png",570,204]]},
 "unit-roles":        {"src":"n-roles-base.png","y0":0,"blur":[[525,535,330,31]],"scrim":["#000000",0.4],"overlay":[["n-roles-modal.png",665,280]]},
 "unit-partners":     {"src":"n-partners.png","y0":0,"blur":[[525,535,330,31]]},
}
json.dump(spec, open("spec.json","w"), indent=1); print(len(spec))
