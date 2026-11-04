from django.contrib import admin
from .models import Alignment

@admin.register(Alignment)
class AlignmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'requested_on', 'finished_on', 'is_finished')
    list_filter = ('status', 'is_finished')
    search_fields = ('name',)
    readonly_fields = ('id', 'requested_on', 'finished_on', 'api_tracking_id', 'status', 'is_finished')
