package net.javacoursework.emsbackend.controller;
import lombok.AllArgsConstructor;
import net.javacoursework.emsbackend.dto.componentsDto;
import net.javacoursework.emsbackend.service.componentsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/components")
public class componentsController {

    private componentsService componentService;

    //Build Add inputDevice REST API
    @PostMapping
    public ResponseEntity<componentsDto> createComponent(@RequestBody componentsDto componentDto){
        componentsDto savedComponent = componentService.createComponent(componentDto);
        return new ResponseEntity<>(savedComponent, HttpStatus.CREATED);
    }

    // Build Get inputDevice REST API
    @GetMapping("{id}")
    public ResponseEntity<componentsDto> getComponentById(@PathVariable("id") Long componentId){
        componentsDto componentDto = componentService.getComponentById(componentId);
        return ResponseEntity.ok(componentDto);

    }

    // Build Get All inputDevices REST API
    @GetMapping
    public ResponseEntity<List<componentsDto>> getAllComponents(){
        List<componentsDto> components = componentService.getAllComponents();
        return ResponseEntity.ok(components);
    }

    // Build Update inputDevices REST API

    @PutMapping("{id}")
    public ResponseEntity<componentsDto> updateComponent(@PathVariable("id") Long componentId,
                                                      @RequestBody componentsDto updatedComponent){
        componentsDto deviceDto = componentService.updateComponent(componentId, updatedComponent);
        return ResponseEntity.ok(deviceDto);

    }

    // Build Delete inputDevice REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteComponent(@PathVariable("id") Long componentId){
        componentService.deleteComponent(componentId);
        return ResponseEntity.ok("Component deleted successfully!");
    }
}
