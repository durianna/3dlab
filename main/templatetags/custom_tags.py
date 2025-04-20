from django import template

register = template.Library()

@register.filter
def to(start, end):
    return range(start, end + 1)

@register.filter
def concat(val, arg):
    return f'{val}{arg}'

@register.filter
def getattr_dynamic(obj, attr_name):
    return getattr(obj, attr_name, None)
